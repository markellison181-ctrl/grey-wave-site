import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vsbwqlkbcgvmphuqfgqb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MTgyMjYsImV4cCI6MjA4NjM5NDIyNn0.wGbB-LZl3UfnE1iNz9pR9dyGuc-bFoP8cxZ90toxSHg'

export const supabase = createClient(supabaseUrl, supabaseKey)