import { useState } from "react"
import { ADMIN_USER, ADMIN_PASS } from "../config/auth"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Login({ setAuth }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (
      username === ADMIN_USER &&
      password === ADMIN_PASS
    ) {
      localStorage.setItem("adminAuth", "true")
      setAuth(true)
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <Card className="w-full max-w-md shadow-lg rounded-3xl border border-gray-200">
        <CardContent className="p-8 space-y-6">

          <h2 className="text-2xl font-bold text-center">
            Admin Login
          </h2>

          <div className="space-y-3">
            <Label>Username</Label>
            <Input
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />
          </div>

          <div className="space-y-3">
            <Label>Password</Label>
            <Input
              type="password"
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <Button
            className="w-full"
            onClick={handleLogin}
          >
            Login
          </Button>

        </CardContent>
      </Card>

    </div>
  )
}