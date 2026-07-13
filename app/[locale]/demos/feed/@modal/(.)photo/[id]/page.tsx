import { getTranslations } from "next-intl/server";
import { Modal } from "../../../_components/Modal";

export default async function InterceptedPhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("FeedDemo");

  return (
    <Modal>
      <p className="text-sm">{t("modalCaption", { id })}</p>
    </Modal>
  );
}
