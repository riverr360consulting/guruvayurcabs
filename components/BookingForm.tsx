"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Uses Web3Forms (https://web3forms.com) for free email delivery of booking
// requests. Replace WEB3FORMS_ACCESS_KEY with your own key from web3forms.com.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

type FormState = {
  pickup: string;
  drop: string;
  date: string;
  time: string;
};

const initialState: FormState = { pickup: "", drop: "", date: "", time: "" };

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Cab Booking Request - Guruvayur Cabs",
          from_name: "Guruvayur Cabs Website",
          pickup_location: form.pickup,
          drop_location: form.drop,
          date: form.date,
          time: form.time,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Card className="p-6 shadow-form sm:p-8">
      <h2 className="mb-5 text-xl font-bold text-brand-900">Book Your Ride</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
      >
        <Field label="Pickup Location">
          <IconInput
            icon={<MapPin className="h-4 w-4" />}
            placeholder="Enter pickup location"
            value={form.pickup}
            onChange={(v) => handleChange("pickup", v)}
            required
          />
        </Field>

        <Field label="Drop Location">
          <IconInput
            icon={<MapPin className="h-4 w-4" />}
            placeholder="Enter drop location"
            value={form.drop}
            onChange={(v) => handleChange("drop", v)}
            required
          />
        </Field>

        <Field label="Date">
          <IconInput
            icon={<Calendar className="h-4 w-4" />}
            type="date"
            value={form.date}
            onChange={(v) => handleChange("date", v)}
            required
          />
        </Field>

        <Field label="Time">
          <IconInput
            icon={<Clock className="h-4 w-4" />}
            type="time"
            value={form.time}
            onChange={(v) => handleChange("time", v)}
            required
          />
        </Field>

        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-11 w-full lg:w-auto"
        >
          <Search className="h-4 w-4" />
          {status === "loading" ? "Searching..." : "Search Cabs"}
        </Button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-sm font-medium text-brand-600">
          Thanks! We&apos;ve received your request and will call you shortly to confirm.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm font-medium text-red-600">
          Something went wrong. Please call or WhatsApp us directly.
        </p>
      )}
    </Card>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-brand-950/60">
        {label}
      </label>
      {children}
    </div>
  );
}

function IconInput({
  icon,
  value,
  onChange,
  ...props
}: {
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-600">
        {icon}
      </span>
      <Input
        className="pl-9"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </div>
  );
}
