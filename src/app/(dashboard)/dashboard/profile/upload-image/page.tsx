"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Camera, ImagePlus, Loader2, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { uploadProfilePhoto } from "@/api";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { useProfilePhoto } from "@/hooks";

const ProfilePictureUpload = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // 5 MB limit
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      return;
    }

    // Image validation
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    setSelectedFile(file);

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreviewUrl(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setIsUploading(true);

      // Later connect your API here
      //
      const formData = new FormData();
      formData.append("profileImage", selectedFile);
      //
      const isSuccess = await uploadProfilePhoto(formData);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      // console.log("Uploading:", selectedFile);
      // console.log("isSuccess", isSuccess);

      if (isSuccess?.success) {
        toast.add({
          title: "Upload Success!",
          description: "Profile Image Updated Successfully",
          type: "success",
        });
        router.push("/");
      } else {
        toast.add({
          title: "Something Went Wrong",
          description: "Please Try again",
          type: "error",
        });
      }

      handleRemove();
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Profile Picture</CardTitle>

        <CardDescription>
          Upload a profile picture to personalize your account.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-6">
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Avatar */}
        <div className="relative">
          <div className="relative flex size-32 items-center justify-center overflow-hidden rounded-full border-2 border-dashed bg-muted">
            {previewUrl ? (
              <Image
                src={previewUrl}
                alt="Profile preview"
                fill
                className="object-cover"
              />
            ) : (
              <ImagePlus className="size-10 text-muted-foreground" />
            )}
          </div>

          {/* Camera button */}
          <Button
            type="button"
            size="icon"
            variant="secondary"
            className="absolute bottom-1 right-1 size-9 rounded-full shadow-md"
            onClick={() => fileInputRef.current?.click()}
          >
            <Camera className="size-4" />
          </Button>
        </div>

        {/* File information */}
        {selectedFile ? (
          <div className="w-full rounded-lg border bg-muted/40 p-3">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">
                  {selectedFile.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={handleRemove}
                disabled={isUploading}
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-center text-sm text-muted-foreground">
            JPG, PNG or WEBP · Maximum 5MB
          </p>
        )}

        {/* Buttons */}
        <div className="flex w-full gap-3">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
          >
            <ImagePlus className="mr-2 size-4" />
            {selectedFile ? "Change Image" : "Choose Image"}
          </Button>

          <Button
            type="button"
            className="flex-1"
            disabled={!selectedFile || isUploading}
            onClick={handleUpload}
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Uploading...
              </>
            ) : (
              "Upload"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfilePictureUpload;
