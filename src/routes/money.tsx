import { createFileRoute } from '@tanstack/react-router';
import { MoneyView, KuboShell } from '@/components/kubo/kubo-app';
import { kuboHead } from '@/components/kubo/metadata';
export const Route = createFileRoute('/money')({head:()=>kuboHead('Family balances','Keep track of the little give and take between family members in Kubo.'),component:()=> <KuboShell><MoneyView/></KuboShell>});
