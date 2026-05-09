import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { error } = await supabase
      .from('bookings')
      .insert([{
        name: body.name,
        phone: body.phone,
        email: body.email,
        address: body.address,
        preferred_date: body.preferred_date,
        preferred_time: body.preferred_time,
        message: body.message,
      }])

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })

  } catch (err) {
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}