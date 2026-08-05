import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://essoxnsgflcrrigplyyw.supabase.co'
const supabaseAnonKey = 'sb_publishable_UzzzK-ZTGjVwA8TXwup13A_ZJz6bL8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)