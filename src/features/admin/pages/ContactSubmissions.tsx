import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge, badgeVariants } from "@/components/ui/badge";

import {
  Building,
  Calendar,
  CheckCircle,
  Mail,
  MessageSquare,
  Phone,
  Trash2,
} from "lucide-react";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { VariantProps } from "class-variance-authority";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  timestamp: string;
  status: "new" | "read" | "resolved";
}

const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filter, setFilter] = useState<"all" | "new" | "read" | "resolved">("all");

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    const data = localStorage.getItem("contactSubmissions");
    if (data) {
      const parsed = JSON.parse(data);
      setSubmissions(parsed.reverse());
    }
  };

  const updateStatus = (id: string, status: "new" | "read" | "resolved") => {
    const updated = submissions.map((sub) =>
      sub.id === id ? { ...sub, status } : sub
    );
    setSubmissions(updated);
    localStorage.setItem("contactSubmissions", JSON.stringify(updated));
    toast.success(`Submission marked as ${status}`);
  };

  const deleteSubmission = (id: string) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      const updated = submissions.filter((sub) => sub.id !== id);
      setSubmissions(updated);
      localStorage.setItem("contactSubmissions", JSON.stringify(updated));
      toast.success("Submission deleted");
    }
  };

  const filteredSubmissions = submissions.filter((sub) => {
    if (filter === "all") return true;
    return sub.status === filter;
  });

//  const getStatusVariant = (status: string) => {
//   const map: Record<string, string> = {
//     new: "default",
//     read: "secondary",
//     resolved: "outline",
//   };

//   return map[status] || "outline";
// };

//  const getSubjectVariant = (subject: string) => {
//   const map: Record<string, string> = {
//     general: "default",
//     support: "secondary",
//     sales: "default",
//     partnership: "secondary",
//     feedback: "outline",
//     other: "outline",
//   };

//   return map[subject] || "outline";
// };


type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

type Status = "new" | "read" | "resolved";

const getStatusVariant = (status: Status): BadgeVariant => {
  const map: Record<Status, BadgeVariant> = {
    new: "default",
    read: "secondary",
    resolved: "outline",
  };

  return map[status];
};

type Subject =
  | "general"
  | "support"
  | "sales"
  | "partnership"
  | "feedback"
  | "other";

const getSubjectVariant = (subject: Subject): BadgeVariant => {
  const map: Record<Subject, BadgeVariant> = {
    general: "default",
    support: "secondary",
    sales: "default",
    partnership: "secondary",
    feedback: "outline",
    other: "outline",
  };

  return map[subject];
};
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Contact Submissions
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and respond to customer inquiries
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All ({submissions.length})
          </Button>

          <Button
            variant={filter === "new" ? "default" : "outline"}
            onClick={() => setFilter("new")}
          >
            New ({submissions.filter((s) => s.status === "new").length})
          </Button>

          <Button
            variant={filter === "read" ? "default" : "outline"}
            onClick={() => setFilter("read")}
          >
            Read ({submissions.filter((s) => s.status === "read").length})
          </Button>

          <Button
            variant={filter === "resolved" ? "default" : "outline"}
            onClick={() => setFilter("resolved")}
          >
            Resolved ({submissions.filter((s) => s.status === "resolved").length})
          </Button>
        </div>
      </div>

      {/* Empty */}
      {filteredSubmissions.length === 0 ? (
        <Card className="p-12 text-center">
          <Mail className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            No submissions found
          </h3>
          <p className="text-muted-foreground">
            {filter === "all"
              ? "No contact form submissions yet"
              : `No ${filter} submissions`}
          </p>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredSubmissions.map((submission:any) => (
            <Card key={submission.id} className="p-6 hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  {/* Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {submission.name}
                    </h3>

                    <Badge variant={getStatusVariant(submission.status)}>
                      {submission.status.toUpperCase()}
                    </Badge>

                    <Badge variant={getSubjectVariant(submission.subject)}>
                      {submission.subject.replace("-", " ").toUpperCase()}
                    </Badge>
                  </div>

                  {/* Info */}
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${submission.email}`} className="hover:text-primary">
                        {submission.email}
                      </a>
                    </div>

                    {submission.phone && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${submission.phone}`} className="hover:text-primary">
                          {submission.phone}
                        </a>
                      </div>
                    )}

                    {submission.company && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building className="w-4 h-4" />
                        {submission.company}
                      </div>
                    )}
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    {new Date(submission.timestamp).toLocaleString()}
                  </div>

                  {/* Message */}
                  <div className="bg-muted/50 p-4 rounded-xl">
                    <div className="flex items-start gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground mt-1" />
                      <p className="text-sm font-semibold text-foreground">
                        Message:
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {submission.message}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                {submission.status === "new" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateStatus(submission.id, "read")}
                  >
                    Mark as Read
                  </Button>
                )}

                {submission.status === "read" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateStatus(submission.id, "resolved")}
                  >
                    <CheckCircle className="w-4 h-4" />
                    Mark as Resolved
                  </Button>
                )}

                {submission.status === "resolved" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateStatus(submission.id, "new")}
                  >
                    Mark as New
                  </Button>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive hover:bg-destructive/10"
                  onClick={() => deleteSubmission(submission.id)}
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;