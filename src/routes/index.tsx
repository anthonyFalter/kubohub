import { createFileRoute } from '@tanstack/react-router';
import { HomeView, KuboShell } from '@/components/kubo/kubo-app';
import { kuboHead } from '@/components/kubo/metadata';
export const Route = createFileRoute('/')({head:()=>kuboHead('Your family, together','Kubo brings your family’s medicines, calendar, groceries, and everyday care together.'),component:()=> <KuboShell><HomeView/></KuboShell>});
