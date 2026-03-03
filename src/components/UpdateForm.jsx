import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

import ImageUpload from "./ImageUpload"
import { postUpdate } from "../services/api"

export default function UpdateForm() {
  const [form, setForm] = useState({
    type: "club",
    title: "",
    content: "",
    announcement_date: "",
    source: "",
    links: "",
    expires_at: "",
    is_published: false,
  })

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async () => {
    setLoading(true)

    const payload = {
      ...form,
      links: form.links ? form.links.split(",") : [],
      images,
    }

    try {
      await postUpdate(payload)
      alert("Posted successfully")
    } catch {
      alert("Error posting")
    }

    setLoading(false)
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-lg border border-gray-200 rounded-3xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Create New Update
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-10 pt-4">

        {/* Update Type */}
        <div className="space-y-3">
          <Label>Update Type</Label>
          <Select
            value={form.type}
            onValueChange={(value) =>
              handleChange("type", value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="club">Club</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <Label>Title</Label>
          <Input
            placeholder="Enter update title"
            value={form.title}
            onChange={(e) =>
              handleChange("title", e.target.value)
            }
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <Label>Content</Label>
          <Textarea
            rows={5}
            placeholder="Write update content..."
            value={form.content}
            onChange={(e) =>
              handleChange("content", e.target.value)
            }
          />
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label>Announcement Date</Label>
            <Input
              type="date"
              value={form.announcement_date}
              onChange={(e) =>
                handleChange(
                  "announcement_date",
                  e.target.value
                )
              }
            />
          </div>

          <div className="space-y-3">
            <Label>Expiry Date</Label>
            <Input
              type="date"
              value={form.expires_at}
              onChange={(e) =>
                handleChange(
                  "expires_at",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        {/* Source */}
        <div className="space-y-3">
          <Label>Source</Label>
          <Input
            placeholder="Optional source"
            value={form.source}
            onChange={(e) =>
              handleChange("source", e.target.value)
            }
          />
        </div>

        {/* Links */}
        <div className="space-y-3">
          <Label>Links (comma separated)</Label>
          <Input
            placeholder="https://example.com"
            value={form.links}
            onChange={(e) =>
              handleChange("links", e.target.value)
            }
          />
        </div>

        {/* Publish */}
        <div className="flex items-center gap-3">
          <Checkbox
            checked={form.is_published}
            onCheckedChange={(checked) =>
              handleChange("is_published", checked)
            }
          />
          <Label>Publish immediately</Label>
        </div>

        {/* Upload */}
        <div className="space-y-3">
          <Label>Upload Images</Label>
          <ImageUpload setImages={setImages} />
        </div>

        {/* Submit */}
        <Button
          className="w-full"
          size="lg"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Posting..." : "Submit Update"}
        </Button>

      </CardContent>
    </Card>
  )
}