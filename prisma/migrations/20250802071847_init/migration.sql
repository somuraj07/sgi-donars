-- CreateTable
CREATE TABLE "public"."Donar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "registerNo" TEXT NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "avaliable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Feedback" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stars" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donar_email_key" ON "public"."Donar"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Donar_registerNo_key" ON "public"."Donar"("registerNo");

-- CreateIndex
CREATE UNIQUE INDEX "Donar_phone_key" ON "public"."Donar"("phone");
