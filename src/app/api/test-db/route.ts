import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("vote-uk");
    
    // Perform a simple operation, like listing collections
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);

    return NextResponse.json({ 
      message: "Successfully connected to the database",
      collections: collectionNames
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ error: "Failed to connect to the database" }, { status: 500 });
  }
}

