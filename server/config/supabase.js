/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

console.log("SUPABASE URL =", process.env.SUPABASE_URL);
console.log("SUPABASE KEY EXISTS =", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default supabase;