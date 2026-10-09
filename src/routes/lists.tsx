import { createFileRoute } from '@tanstack/react-router';
import { ListsView, KuboShell } from '@/components/kubo/kubo-app';
import { kuboHead } from '@/components/kubo/metadata';
export const Route = createFileRoute('/lists')({head:()=>kuboHead('Household lists','Keep family groceries and household bills together in Kubo.'),component:()=> <KuboShell><ListsView/></KuboShell>});
