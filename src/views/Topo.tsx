import Card from "@/components/molecules/card/Card";
import Grid from "@/components/molecules/grid/Grid";
import SmallHeader from "@/components/molecules/header/SmallHeader";
import Main from "@/components/molecules/main/Main";
import { Link } from "react-router-dom";

const CARDS = [
  { title: "Vie quotidienne" },
  { title: "Environnement" },
  { title: "Economie" },
  { title: "Politique" },
  { title: "Monde" },
  { title: "Actu pour les jeunes" },
];

export default function Topo() {
  return (
    <>
      <SmallHeader />
      <Main>
        <div className="flex flex-col gap-3 mb-3">
          <h2 className="text-left text-xl">Hello !</h2>
          <p className="text-left">
            Vos dernières actualités tout simplement aujourd’hui.
          </p>
        </div>
        <Link to="/hackathon-franceinfo/topo/article">
          <Grid>
            {CARDS.map(({ title }) => (
              <Card key={title}>
                <h3>{title}</h3>
              </Card>
            ))}
          </Grid>
        </Link>
      </Main>
    </>
  );
}
