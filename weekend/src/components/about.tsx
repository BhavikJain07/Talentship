import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";
export default function AboutComponent() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-5 mx-48 my-24">
      <div className="col-span-2 row-span-3">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li><p>Intern at TSI Technologies - Talentship</p></li>
              <li>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptate repellat nulla, cumque, sed, natus dolorem facere voluptatibus magnam id sit esse omnis laboriosam nostrum at! Aliquid, quam saepe veritatis corporis quidem unde dolorum omnis labore ab quisquam qui tempora assumenda eum consequuntur voluptatum minima, distinctio adipisci delectus nesciunt quis?</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 row-span-2">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>
              University
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li className="text-xs font-bold">
                2022 Nov - Present
              </li>
              <li className="text-sm font-bold">
                Dwaraka Doss Goverdhan Doss Vaishnav College, Arumbakkam
              </li>
              <li>
                <p>Currently enrolled in Commerce with Computer Applications program at DG Vaishnav College, Arumbakkam</p>
              </li>
            </ul>
          </CardContent>
         
        </Card>
      </div>
      <div className="col-span-2 row-span-2">
        <Card className="w-full h-full">
        <CardHeader>
            <CardTitle>
              Schooling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <p className="text-xs font-bold">2021 May - 2022 Apr</p>
              </li>
              <li>
                <p className="text-sm font-bold">Maharishi Vidya Mandir, Chetpet</p>
              </li>
              <li>
                <p>Completed Commerce with Computer Science with 92.8% in CBSE.</p>
              </li>
            </ul>
            <br></br>
            <ul>
              <li>
                <p className="text-xs font-bold">2019 Mar - 2020 Mar</p>
              </li>
              <li>
                <p className="text-sm font-bold">Maharishi Vidya Mandir, Chetpet</p>
              </li>
              <li>
                <p>Completed successfully with 88.4% in CBSE</p>
              </li>
            </ul>
          </CardContent>
         
        </Card>
      </div>
      <div className="col-span-2 row-span-1">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>
              Socials
            </CardTitle>
          </CardHeader>
          <CardContent>
           <div className="flex flex-row justify-center w-full gap-5">
           <Button><Linkedin></Linkedin></Button>
            <Button><Mail></Mail></Button>
            <Button><Github></Github></Button>
           </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
