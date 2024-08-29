import { api } from "@/lib/axios";

interface UpdateProfileBody {
  name: string;
  description: string | undefined;
}

export async function updateProfile({ description, name }: UpdateProfileBody) {
  await api.put("/profile", { description, name });
}
