import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Register</CardTitle>
              <CardDescription>
                Create your account. It&apos;s free and only takes a minute.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="grid gap-2 flex-1">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        type="text"
                        placeholder="First Name"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="grid gap-2 flex-1">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        type="text"
                        placeholder="Last Name"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Confirm Password</Label>
                    </div>
                    <Input id="confirm-password" type="password" required />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I accept the Terms of Use and Privacy Policy
                    </label>
                  </div>
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
