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

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

const countriesList = jsonCountries;
const countryMap = new Map(jsonCountries.map((c) => [c.alpha2Code, c]));

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
              <img className="h-3 w-3" src={selectedCountry.flag} alt="" loading="lazy" />
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
              {countriesList.map((country) => (
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
                  <img className="h-3 w-3" src={country.flag} alt="" loading="lazy" />
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
