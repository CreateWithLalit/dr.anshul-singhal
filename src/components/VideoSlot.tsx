import { CalendarIcon } from "./illustrations";

/** A production media slot that intentionally renders no unverified media in pre-launch. */
export function VideoSlot({ title = "Future consultation video" }: { title?: string }) {
  return (
    <section className="rounded-[16px] border border-dashed border-[#A2AFB6]/60 bg-[#DCEBEA]/10 p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#DCEBEA] text-[#0F5C63]">
          <CalendarIcon size={18} />
        </span>
        <div>
          <h2 className="font-serif text-xl font-normal text-[#16232B]">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#5B6870]">
            This reusable media area will display an approved educational video or clinical explainer after content review. No video is published during pre-launch.
          </p>
        </div>
      </div>
    </section>
  );
}
