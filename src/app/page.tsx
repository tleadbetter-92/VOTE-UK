import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import clientPromise from '@/lib/mongodb'

interface Law {
  id: string
  title: string
  description: string
  votes: {
    yes: number
    no: number
  }
}

export default async function Home() {
  let laws: Law[] = []

  try {
    const client = await clientPromise
    const db = client.db("vote-uk")
    laws = await db.collection<Law>("laws").find({}).sort({ _id: -1 }).limit(10).toArray()
  } catch (e) {
    console.error(e)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Welcome to VOTE-UK</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-4">
        {laws.map((law) => (
          <Card key={law.id}>
            <CardHeader>
              <CardTitle>{law.title}</CardTitle>
              <CardDescription>Current Votes: Yes - {law.votes.yes}, No - {law.votes.no}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{law.description}</p>
              <Link href={`/laws/${law.id}`} className="mt-4 inline-block">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import clientPromise from '@/lib/mongodb'

interface Law {
  id: string
  title: string
  description: string
  votes: {
    yes: number
    no: number
  }
}

export default async function Home() {
  let laws: Law[] = []

  try {
    const client = await clientPromise
    const db = client.db("vote-uk")
    laws = await db.collection<Law>("laws").find({}).sort({ _id: -1 }).limit(10).toArray()
  } catch (e) {
    console.error(e)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Welcome to VOTE-UK</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-4">
        {laws.map((law) => (
          <Card key={law.id}>
            <CardHeader>
              <CardTitle>{law.title}</CardTitle>
              <CardDescription>Current Votes: Yes - {law.votes.yes}, No - {law.votes.no}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{law.description}</p>
              <Link href={`/laws/${law.id}`} className="mt-4 inline-block">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

