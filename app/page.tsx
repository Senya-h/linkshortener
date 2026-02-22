import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignUpButton } from "@clerk/nextjs";
import { Link2, BarChart3, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 px-4 py-24 text-center max-w-3xl">
        <Badge variant="secondary" className="text-sm px-3 py-1">
          Free to use
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Shorten links.{" "}
          <span className="text-[#6c47ff]">Amplify reach.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Transform long, unwieldy URLs into clean, shareable short links in seconds. Track clicks, manage links, and grow your audience.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SignUpButton>
            <Button size="lg" className="bg-[#6c47ff] hover:bg-[#5a39d9] text-white rounded-full px-8">
              Get started for free
            </Button>
          </SignUpButton>
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <a href="#features">See features</a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-5xl px-4 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need</h2>
          <p className="mt-3 text-muted-foreground">
            Powerful features to manage and share your links efficiently.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#6c47ff]/10">
                <Link2 className="h-5 w-5 text-[#6c47ff]" />
              </div>
              <CardTitle className="text-base">Instant shortening</CardTitle>
              <CardDescription>
                Paste any URL and get a short link in one click. No sign-up required to try.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#6c47ff]/10">
                <BarChart3 className="h-5 w-5 text-[#6c47ff]" />
              </div>
              <CardTitle className="text-base">Click analytics</CardTitle>
              <CardDescription>
                Track how many times your links are clicked and where your audience comes from.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#6c47ff]/10">
                <Zap className="h-5 w-5 text-[#6c47ff]" />
              </div>
              <CardTitle className="text-base">Fast redirects</CardTitle>
              <CardDescription>
                Lightning-fast redirects powered by edge infrastructure so your visitors never wait.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#6c47ff]/10">
                <Shield className="h-5 w-5 text-[#6c47ff]" />
              </div>
              <CardTitle className="text-base">Secure & reliable</CardTitle>
              <CardDescription>
                All links are protected and your data is kept private. 99.9% uptime guaranteed.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full border-t py-24">
        <div className="flex flex-col items-center gap-6 px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="max-w-md text-muted-foreground">
            Create your free account today and start shortening links in seconds.
          </p>
          <SignUpButton>
            <Button size="lg" className="bg-[#6c47ff] hover:bg-[#5a39d9] text-white rounded-full px-8">
              Create free account
            </Button>
          </SignUpButton>
        </div>
      </section>
    </main>
  );
}
