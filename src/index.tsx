import jsonCountries from "@/assets/countries.json";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  region: string;
  latlng: number[];
  demonym: string;
  timezones: string[];
  flag: string;
  currencies: Currency[];
}

const normalizedCountries: Country[] = jsonCountries.map((country: any) => ({
  name: country.name ?? null,
  alpha2Code: country.alpha2Code ?? null,
  alpha3Code: country.alpha3Code ?? null,
  callingCodes: country.callingCodes ?? null,
  capital: country.capital ?? null,
  region: country.region ?? null,
  latlng: country.latlng ?? null,
  demonym: country.demonym ?? null,
  timezones: country.timezones ?? null,
  flag: country.flag ?? `/flags/${country.alpha2Code?.toLowerCase()}.png`,
  currencies: country.currencies ?? null,
}));

const countryMap = new Map(normalizedCountries.map((c) => [c.alpha2Code, c]));

type Props = {
  // Optional prop to either show country code or country name
  showCountryCode?: boolean;

  // Optional default country by providing alpha2Code.
  defaultCountryCode?: string;

  // Optional placeholder
  placeholder?: string;

  onCountryChange: (country: Country) => void;
};
export default function RCD({
  showCountryCode = true,
  placeholder = "Select Country",
  defaultCountryCode,
  onCountryChange,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultCountryCode || "");

  const selectedCountry = value ? countryMap.get(value) : null;

  React.useEffect(() => {
    normalizedCountries.forEach((country) => {
      const img = new Image();
      img.src = `/flags/${country.alpha2Code.toLowerCase()}.svg`;
    });
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between cursor-pointer"
        >
          {selectedCountry ? (
            <>
              <img
                className="h-3 w-3"
                src={`/flags/${selectedCountry.alpha2Code.toLowerCase()}.svg`}
                alt=""
                loading="lazy"
              />
              {!showCountryCode ? selectedCountry.name : selectedCountry.alpha2Code}
            </>
          ) : (
            placeholder
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {normalizedCountries.map((country) => (
                <CommandItem
                  className="cursor-pointer"
                  key={country.alpha2Code}
                  value={country.alpha2Code}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    onCountryChange(country);
                  }}
                >
                  <img
                    className="h-3 w-3"
                    src={`/flags/${country.alpha2Code.toLowerCase()}.svg`}
                    alt={country.name}
                    loading="lazy"
                  />
                  {country.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === country.alpha2Code ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
