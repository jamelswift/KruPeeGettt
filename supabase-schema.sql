-- Create testimonials table
create table testimonials (
  id uuid default gen_random_uuid() primary key,
  parent_name text not null,
  student_name text not null,
  grade text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table testimonials enable row level security;

-- Create policy to allow anyone to insert (submit testimonials)
create policy "Anyone can insert testimonials"
on testimonials for insert
with check (true);

-- Create policy to allow anyone to read testimonials
create policy "Anyone can view testimonials"
on testimonials for select
using (true);
