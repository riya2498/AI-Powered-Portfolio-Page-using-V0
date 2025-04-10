import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactForm() {
  return (
    <section id="contact" className="bg-muted py-24 scroll-mt-20">
      <div className="container">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
            <p className="text-muted-foreground">Have a project in mind? Let's work together.</p>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="mailto:chaddha.ri@northeastern.edu"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      chaddha.ri@northeastern.edu
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/riya-chaddha-73321a145"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      linkedin.com/in/riya-chaddha-73321a145
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">GitHub</p>
                    <a
                      href="https://github.com/riya2498"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      github.com/riya2498
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
