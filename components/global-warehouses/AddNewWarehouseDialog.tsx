import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import Image from "next/image";
import AddIcon from "@/public/add.svg";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {useMutation} from "@tanstack/react-query";
import {CreateWarehouse, Warehouse} from "@/utils/types/warehouse";
import myAxios from "@/API";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  address: z.string().min(1),
  emailAddress: z.string().min(1).email(),
});

async function createNewWarehouse(warehouseDto: CreateWarehouse) {
  const response = await myAxios.post(`Warehouse`, warehouseDto)
  return response.data;
}

interface IProps {
  onCreateWarehouse: (newWarehouse: Warehouse) => void
}

const AddNewWarehouseDialog: React.FC<IProps> = ({onCreateWarehouse}) => {
  const {mutateAsync, mutate} = useMutation({
    mutationKey: ["new-warehouse"],
    mutationFn: createNewWarehouse
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      emailAddress: "",
      name: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const warehouseDto: CreateWarehouse = {
      address: values.address,
      name: values.name,
      emailAddress: values.emailAddress,
      companyId: 1, // TODO - change company Id
    }
    const data: {value: Warehouse} = await mutateAsync(warehouseDto);
    onCreateWarehouse(data.value);
  }

  return (
    <Dialog onOpenChange={(isOpen) => isOpen ? form.reset() : null}>
      <DialogTrigger>
        <Image
          className={"w-[35px] cursor-pointer"}
          alt={"Add new Item"}
          src={AddIcon}>
        </Image>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={"text-2xl text-center text-primary-color mb-8"}>Create a new warehouse</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailAddress"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Email address" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewWarehouseDialog;