"use client"

import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface Job {
  id: number
  title: string
  company: string
  status: string
  date_applied: string
}

interface ApiPreviewProps {
  apiUrl: string
  title: string
}

export default function ApiPreview({ apiUrl, title }: ApiPreviewProps) {
  const [data, setData] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const result = await response.json()
        setData(result.slice(0, 3)) // Show only first 3 items
      } catch (err) {
        setError("Unable to load preview data")
        console.error("API Preview Error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [apiUrl])

  if (loading) {
    return (
      <Card className="p-4 mt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading {title} preview...
        </div>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="p-4 mt-4">
        <div className="text-sm text-muted-foreground">{error}</div>
      </Card>
    )
  }

  return (
    <Card className="p-4 mt-4">
      <h4 className="font-medium text-sm mb-3">{title} Preview</h4>
      <div className="space-y-2">
        {data.map((job) => (
          <div key={job.id} className="flex justify-between items-center text-xs border-b pb-2 last:border-b-0">
            <div>
              <div className="font-medium">{job.title}</div>
              <div className="text-muted-foreground">{job.company}</div>
            </div>
            <div className="text-right">
              <div
                className={`px-2 py-1 rounded text-xs ${
                  job.status === "Applied"
                    ? "bg-blue-100 text-blue-800"
                    : job.status === "Interview"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                }`}
              >
                {job.status}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground mt-2 text-center">Live data from demo API</div>
    </Card>
  )
}
