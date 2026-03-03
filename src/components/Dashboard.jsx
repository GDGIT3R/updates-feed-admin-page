import UpdateForm from "./UpdateForm"
import { Button } from "@/components/ui/button"

export default function Dashboard({ setAuth }) {
  const logout = () => {
    localStorage.removeItem("adminAuth")
    setAuth(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-md border border-gray-200 p-6 mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            GDG Admin Panel
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage announcements and updates
          </p>
        </div>

        <Button variant="destructive" onClick={logout}>
          Logout
        </Button>
      </div>

      <UpdateForm />
    </div>
  )
}