ALTER TABLE "companions"
ADD COLUMN "phone" TEXT,
ADD COLUMN "normalizedPhone" TEXT;

CREATE UNIQUE INDEX "companions_normalizedPhone_key"
ON "companions"("normalizedPhone");

CREATE TABLE "companion_gift_choices" (
  "id" TEXT NOT NULL,
  "companionId" TEXT NOT NULL,
  "giftId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "companion_gift_choices_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "companion_gift_choices_companionId_giftId_key"
ON "companion_gift_choices"("companionId", "giftId");

CREATE INDEX "companion_gift_choices_companionId_idx"
ON "companion_gift_choices"("companionId");

CREATE INDEX "companion_gift_choices_giftId_idx"
ON "companion_gift_choices"("giftId");

ALTER TABLE "companion_gift_choices"
ADD CONSTRAINT "companion_gift_choices_companionId_fkey"
FOREIGN KEY ("companionId") REFERENCES "companions"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "companion_gift_choices"
ADD CONSTRAINT "companion_gift_choices_giftId_fkey"
FOREIGN KEY ("giftId") REFERENCES "gifts"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
