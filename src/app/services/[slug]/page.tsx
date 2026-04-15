import { notFound } from "next/navigation";
import ServiceDetailPageClient from "@/components/service-detail-page-client";
import { getServiceBySlug, servicesCatalog } from "@/lib/services-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesCatalog.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPageClient slug={slug} />;
}
