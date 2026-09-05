import { profile } from "@/data/profile";

export function ResumePreview() {
  return <section className="resume-preview">
    <div className="resume-toolbar"><span>Haider_Ali_Resume.pdf</span><span>PDF</span></div>
    <iframe title="Haider Ali Resume" src={`${profile.resumePath}#view=FitH`} />
  </section>;
}
