import { createFileRoute } from '@tanstack/react-router';
import { CalendarView, KuboShell } from '@/components/kubo/kubo-app';
import { kuboHead } from '@/components/kubo/metadata';
export const Route = createFileRoute('/calendar')({head:()=>kuboHead('Family calendar','Make time for family with shared events and reminders in Kubo.'),component:()=> <KuboShell><CalendarView/></KuboShell>});
