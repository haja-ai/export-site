-- Private attachment storage for MiniElephant inquiry replies.
-- Run this once in Supabase SQL Editor before deploying the attachment feature.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'inquiry-attachments',
  'inquiry-attachments',
  false,
  26214400,
  array[
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ]
)
on conflict (id) do update
set public = false,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

alter table public.inquiry_replies
  add column if not exists attachments jsonb not null default '[]'::jsonb;

grant select, insert, update, delete on table storage.objects to service_role;
grant select, insert, update, delete on table public.inquiry_replies to service_role;
