import { Card } from "@/components/ui/card"
import AnimatedCounter from "./animated-counter"

const stats = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
]

export default function StatsSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
