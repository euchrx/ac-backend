CREATE TABLE "gallery_photos" (
  "id" TEXT NOT NULL,
  "authorName" TEXT NOT NULL,
  "caption" TEXT,
  "mimeType" TEXT NOT NULL,
  "imageData" BYTEA NOT NULL,
  "originalName" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "gallery_photos_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "gallery_photos_createdAt_idx"
ON "gallery_photos"("createdAt");
