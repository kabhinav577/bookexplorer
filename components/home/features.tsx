import Image from 'next/image';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { MailIcon } from 'lucide-react';

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-y-3 items-center justify-center p-5">
      <div className="w-[100px] h-[100px] mb-2">
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <h3 className="text-lg text-slate-500 font-semibold">{title}</h3>
      <div className="text-sm text-slate-500 text-center">{description}</div>
    </div>
  );
};

export const Features = () => {
  return (
    <div className="lg:px-20 w-full my-12 h-full bg-gray-200 lg:h-[600px] py-8 flex flex-col justify-center items-center gap-y-8">
      <div>
        <h2 className="text-3xl text-center font-semibold text-slate-600">
          Features
        </h2>
      </div>

      {/* SHOWING FEATURES DETAILS  */}
      <div className="flex flex-col lg:flex-row justify-evenly items-center px-8">
        <FeatureCard
          icon="/book-1.svg"
          title="ATTRACTIVE"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum explicabo dicta provident. Quo, facilis, reiciendis, molestiae ipsam deserunt id incidunt pariatur vero libero accusamus dolorem iusto aut quaerat officia."
        />
        <FeatureCard
          icon="/light-bulb.svg"
          title="INNOVATIVE"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum explicabo dicta provident. Quo, facilis, reiciendis, molestiae ipsam deserunt id incidunt pariatur vero libero accusamus dolorem iusto aut quaerat officia."
        />
        <FeatureCard
          icon="/graduation-cap.svg"
          title="EDUCATIVE"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum explicabo dicta provident. Quo, facilis, reiciendis, molestiae ipsam deserunt id incidunt pariatur vero libero accusamus dolorem iusto aut quaerat officia."
        />
      </div>

      {/* NEWLETTER FORM  */}
      <div className="w-[80%]  lg:w-[50%]">
        <Card className="w-full">
          <CardHeader>
            <CardDescription className="text-slate-500 text-center">
              <strong>Subscribe</strong> for special price & latest updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center lg:flex-row justify-center gap-2 lg:gap-0">
              <Input className="rounded-tr-none rounded-br-none focus-visible:ring-0" />
              <Button className="bg-green-500 rounded-tl-none rounded-bl-none w-full lg:w-[100px]">
                <MailIcon className="w-6 h-6 mr-2" />
                <Link href="/books">Subscribe</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
