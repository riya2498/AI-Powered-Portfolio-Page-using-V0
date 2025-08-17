"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Terminal } from "lucide-react"

export function ContactForm() {
  return (
    <section id="contact" className="py-24 scroll-mt-20 relative bg-black">
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>

      <div className="container relative z-10">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-terminal rounded border border-green-500/50">
              <Terminal className="h-4 w-4 text-neon-green" />
              <span className="text-sm font-medium text-neon-green font-tech">$ ./connect</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight tech-gradient font-tech">Initialize Connection</h2>
            <p className="text-green-400 font-mono">Ready to collaborate on cutting-edge projects?</p>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <Card className="bg-terminal border-neon hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-neural p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neon-green font-tech">Email Protocol</p>
                    <a
                      href="mailto:riyachaddha1998@gmail.com"
                      className="text-sm text-green-400 hover:text-neon-green font-mono transition-colors"
                    >
                      riyachaddha1998@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-terminal border-neon hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-neural p-2 rounded-lg">
                    <Linkedin className="h-5 w-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neon-green font-tech">Professional Network</p>
                    <a
                      href="https://linkedin.com/in/riya-chaddha-73321a145"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-400 hover:text-neon-green font-mono transition-colors"
                    >
                      linkedin.com/in/riya-chaddha-73321a145
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-terminal border-neon hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-neural p-2 rounded-lg">
                    <Github className="h-5 w-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neon-green font-tech">Code Repository</p>
                    <a
                      href="https://github.com/riya2498"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-400 hover:text-neon-green font-mono transition-colors"
                    >
                      github.com/riya2498
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Terminal output style */}
          <div className="bg-black border border-green-500/50 rounded p-4 font-mono text-sm">
            <div className="text-green-400 mb-2">
              <span className="text-cyan-400">$</span> cat status.txt
            </div>
            <div className="text-green-300">
              Status: Available for collaboration
              <br />
              Interests: AI/ML, Data Engineering, Neural Networks
              <br />
              Response Time: &lt; 24 hours
              <br />
              <span className="animate-terminal-blink">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
