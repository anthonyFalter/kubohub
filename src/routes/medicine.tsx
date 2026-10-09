import { createFileRoute } from '@tanstack/react-router';
import { MedicineView, KuboShell } from '@/components/kubo/kubo-app';
import { kuboHead } from '@/components/kubo/metadata';
export const Route = createFileRoute('/medicine')({head:()=>kuboHead('A dose of care','Your family’s medicine reminders and cabinet, together in Kubo.'),component:()=> <KuboShell><MedicineView/></KuboShell>});
