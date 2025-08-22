import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json();
    const serviceCollection = await dbConnect("car_services");
    const result = await serviceCollection.insertOne(body);

    return new Response(
      JSON.stringify({ success: true, data: result }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
