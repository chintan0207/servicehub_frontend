import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div>
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>

          <p className="text-xl mb-8 text-primary-foreground/80">
            Join thousands of businesses using OUJAT for their logistics needs
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup?type=customer">
              <Button variant="secondary" size="lg">
                Post a Request
              </Button>
            </Link>

            <Link to="/signup?type=agent">
              <Button
                variant="outline"
                size="lg"
                className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
              >
                Become a Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetStarted