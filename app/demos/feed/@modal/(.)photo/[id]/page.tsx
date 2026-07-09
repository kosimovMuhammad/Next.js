import { Modal } from "../../../_components/Modal";

export default async function InterceptedPhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Modal>
      <p className="text-sm">
        Photo #{id} — rendered by the intercepted route at
        @modal/(.)photo/[id]/page.tsx. The URL says /demos/feed/photo/{id}
        but the feed is still visible behind this modal.
      </p>
    </Modal>
  );
}
