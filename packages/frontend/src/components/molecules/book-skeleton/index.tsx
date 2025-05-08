import { Card } from "@/components/atoms/card";
import { CardContent } from "@/components/atoms/card-content";
import { CardFooter } from "@/components/atoms/card-footer";
import { CardSkeleton } from "@/components/atoms/card-skeleton";

export function BookSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[3/4] w-full bg-muted">
        <CardSkeleton className="h-full w-full" />
      </div>
      <CardContent className="p-4">
        <CardSkeleton className="h-6 w-3/4 mb-2" />
        <CardSkeleton className="h-4 w-1/2" />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <CardSkeleton className="h-4 w-1/3" />
        <CardSkeleton className="h-8 w-24" />
      </CardFooter>
    </Card>
  );
}
