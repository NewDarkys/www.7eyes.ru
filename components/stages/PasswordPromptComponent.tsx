"use client";

export default function TopSecret() {
  return (
    <div>
      <span>pass</span>
      <div
        className="p-4 mb-4 text-sm text-fg-success-strong rounded-base bg-success-soft"
        role="alert"
      >
        <span className="font-medium">Success alert!</span> The developer has
        only one official Discord account: RUS_Darkys. All others are
        impersonators.
      </div>
    </div>
  );
}
