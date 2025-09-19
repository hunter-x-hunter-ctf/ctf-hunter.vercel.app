import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function HiddenEndpointPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-xl font-bold text-blue-600">← BACK TO HOME PAGE</span>
            </Link>
            <div className="flex items-center gap-4 text-sm text-muted-foreground"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-600 glitch" data-text="CONGRATULATIONS!">
              CONGRATULATIONS!
            </h1>
            <p className="text-lg text-muted-foreground">You successfully found the hidden endpoint!</p>
          </div>

          <Card className="bg-card border-blue-600 p-8">
            <div className="space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-600">FLAG CAPTURED</h2>
                <div className="bg-secondary p-6 rounded font-mono">
                  <p className="text-blue-600 text-xl font-bold">ITTO_CTF{"{118e34e0-305$-4deb-305$-82ce8930}"}</p>
                </div>
                <div className="mt-4 p-4 bg-muted rounded">
                  <p className="text-sm text-muted-foreground mb-2">Hidden Endpoint Found:</p>
                  <code className="text-blue-600 font-mono text-sm break-all">
                    https://ctf-hunter.vercel.app/305$-hidden-endpoint-305$
                  </code>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>{"[INFO] Well done! You have successfully completed the Hunter x Hunter CTF"}</p>
            <p>{"[TIP] In real scenarios, always check repositories, source code, and hidden directories"}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
