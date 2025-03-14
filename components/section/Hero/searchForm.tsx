import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SearchIcon } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SearchForm = () => {
  const formSchema = z.object({
    title: z.string().min(2).max(50),
    location: z.string(),
    jobType: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      jobType: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };
  return (
    <div className="flex flex-col gap-[1.3125rem] border-b border-[#E9ECEF] pb-[0.3125rem]">
      <div>
        <h2 className="text-[1.375rem] font-semibold text-dark">
          Find your Dream Job, <span className="text-active">Albert!</span>
        </h2>
        <p className="text-muted">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>
      </div>
      <Card className="p-5 rounded-[0.625rem]">
        <Form {...form}>
          <form
            className="flex flex-col md:flex-row justify-between md:items-center md:gap-0 gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="xl:min-w-[55%] min-w-[43%]">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="!h-[2.3125rem] !px-0 placeholder:text-muted text-dark !shadow-none !outline-0 border-0 !rounded-0 !focus-visible:rounded-0 !text-base focus-visible:border-0 focus-visible:ring-0 "
                        placeholder="Job Title, Company, or Keywords"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-1 flex-wrap md:flex-nowrap items-center justify-between sm:gap-0 gap-3">
              <div className="xl:w-[10.75rem] md:w-[10.625rem] sm:w-[33.33%] flex justify-center items-center border-r border-l border-[#E9ECEF]">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="max-w-[10rem] shadow-none border-0 gap-4 cursor-pointer">
                            <SelectValue
                              className="truncate"
                              placeholder="Select Location"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="new-york">New York</SelectItem>
                          <SelectItem value="houston">Houston</SelectItem>
                          <SelectItem value="dallas">Dallas</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem className="md:w-[6.875rem] sm:w-[33.33%]">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className=" shadow-none border-0 gap-4 cursor-pointer">
                          <SelectValue
                            className="truncate"
                            placeholder="Job Type"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fd">Frontend</SelectItem>
                        <SelectItem value="bd">Backend</SelectItem>
                        <SelectItem value="gd">Graphcis Designer</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="font-normal text-white text-base 2xl:px-9 px-6 py-[0.625rem] gap-[0.625rem]">
                <div className="pointer-events-none">
                  <SearchIcon stroke="#fff" />
                </div>
                Search
              </Button>
            </div>
          </form>
        </Form>
      </Card>
      <div className="flex items-center gap-[0.9375rem]">
        <span className="text-primary text-sm">Similar:</span>
        <ul className="flex items-center gap-3 text-primary text-[0.75rem] flex-wrap">
          <li
            className="px-3.5 py-2 border border-[#737A91] rounded-[0.3125rem] leading-none cursor-pointer"
            onClick={() => form.setValue("jobType", "fd")}
          >
            Frontend
          </li>
          <li
            className="px-3.5 py-2 border border-[#737A91] rounded-[0.3125rem] leading-none cursor-pointer"
            onClick={() => form.setValue("jobType", "bd")}
          >
            Backend
          </li>
          <li
            className="px-3.5 py-2 border border-[#737A91] rounded-[0.3125rem] leading-none cursor-pointer"
            onClick={() => form.setValue("jobType", "gd")}
          >
            Graphic Designer
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchForm;
