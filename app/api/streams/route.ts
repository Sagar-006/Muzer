import { getSession } from "@/app/lib/session";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string(),
  spaceId: z.string(),
});

const MAX_QUEUE_LEN = 20;

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();

    if (!session?.user.id) {
      return NextResponse.json(
        {
          message: "Unauthenticated",
        },
        {
          status: 403,
        }
      );
    };

    const data = CreateStreamSchema.parse(await req.json());

    if(!data.url.trim()){
        return NextResponse.json({
            message:"Youtube link cannot be empty",
        },
        {
            status:400,
        }
    )
    }

  } catch (e) {}
}
