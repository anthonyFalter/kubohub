import { createFileRoute } from '@tanstack/react-router';
import { FamilyView, KuboShell } from '@/components/kubo/kubo-app';
import { kuboHead } from '@/components/kubo/metadata';
export const Route = createFileRoute('/family')({head:()=>kuboHead('Your family circle','A shared space for every member of your family in Kubo.'),component:()=> <KuboShell><FamilyView/></KuboShell>});
