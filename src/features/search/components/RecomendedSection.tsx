import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export function RecomendedSection() {
  return (
    <div className="grid grid-cols-3 gap-4 flex-1">
      <Card className="">
        <CardHeader>
          <CardTitle>Polecani Lekarze Weterynarii</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="text-center text-muted-foreground">
            Lista polecanych lekarzy weterynarii
          </div>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle>Polecani Behawioryści</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="text-center text-muted-foreground">
            Lista polecanych behawiorystów
          </div>
        </CardContent>
      </Card>
      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle>Polecani Trenerzy</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="text-center text-muted-foreground">
            Lista polecanych trenerów
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
