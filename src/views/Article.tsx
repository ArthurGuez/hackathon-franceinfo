import styled from "styled-components";
import image from "@/assets/images/image-article.png";
import image2 from "@/assets/images/image-article-2.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SmallHeader from "@/components/molecules/header/SmallHeader";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const ArticleCard = styled.div`
  padding: 0px 50px 0 50px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: fit-content;
  padding: 10px;

  background-color: #285349;
  color: white;
  border-radius: 5px;
  font-weight: 10px;
`;

const FIRST_CARD = [
  {
    label: "A retenir",
    description:
      "La mobilisation des étudiants américains contre la guerre à Gaza créé des tensions et certaines universités ont fait procéder à des arrestations.",
  },
  {
    label: "Contexte",
    description:
      "Buser occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens sccatis ordinibus parans hastisque feriens scuta.",
  },
  {
    label: "Problématique",
    description:
      "Buser occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens sccatis ordinibus parans hastisque feriens scuta.",
  },
  {
    label: "Conclusion",
    description:
      "Surgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas po",
    button: "En savoir plus",
    link: "https://www.francetvinfo.fr/monde/proche-orient/israel-palestine/plus-ils-essaient-de-nous-forcer-au-silence-plus-fort-nous-allons-crier-aux-etats-unis-la-mobilisation-des-etudiants-contre-la-guerre-a-gaza-prend-de-l-ampleur_6505283.html",
  },
];

const SECOND_CARD = [
  {
    label: "A retenir",
    description:
      "En Russie, un ministre adjoint de la Défense arrêté pour des soupçons de corruption",
  },
  {
    label: "Contexte",
    description:
      "Buser occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens sccatis ordinibus parans hastisque feriens scuta.",
  },
  {
    label: "Problématique",
    description:
      "Buser occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens sccatis ordinibus parans hastisque feriens scuta.",
  },
  {
    label: "Conclusion",
    description:
      "Surgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas po",
    button: "En savoir plus",
    link: "https://www.francetvinfo.fr/monde/russie/en-russie-un-ministre-adjoint-de-la-defense-a-ete-arrete-pour-corruption-presumee_6504209.html",
  },
];

const Back = styled.div`
  padding: 15px 50px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

// Usage in a React component
export default function Article() {
  return (
    <>
      <SmallHeader />
      <Link to="/hackathon-franceinfo/topo">
        <Back>
          <ArrowLeftIcon /> retour aux catégories
        </Back>
      </Link>
      <ArticleCard>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {FIRST_CARD.map(({ button, label, link, description }, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <img src={image} alt="Le Topo" />
                    <CardContent className="flex aspect-square  p-6 flex-col text-left gap-2">
                      <h3 className="text-1xl font-semibold mb-1">
                        La mobilisation contre la guerre à Gaza prend de
                        l'ampleur
                      </h3>
                      <Label>{label}</Label>
                      <p>{description}</p>
                      {button && link && (
                        <Button asChild>
                          <Link to={link}>{button}</Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {SECOND_CARD.map(({ button, label, link, description }, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <img src={image2} alt="Le Topo" />
                    <CardContent className="flex aspect-square  p-6 flex-col text-left gap-2">
                      <h3 className="text-1xl font-semibold mb-1">
                        Le Comité d'enquête russe a annoncé mardi que Timur
                        Ivanov est soupçonné d'avoir accepté un
                        dessous-de-table.
                      </h3>
                      <Label>{label}</Label>
                      <p>{description}</p>
                      {button && link && (
                        <Button asChild>
                          <Link to={link}>{button}</Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ArticleCard>
    </>
  );
}
