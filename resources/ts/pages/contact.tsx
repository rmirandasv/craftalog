import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import AppLayout from "@/components/layouts/app-layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log("Form submitted:", formData);
    alert(
      "Gracias por contactarnos. Nos pondremos en contacto con usted pronto."
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Contáctenos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarle. Complete el formulario a continuación
              o utilice nuestros datos de contacto para comunicarse con
              nosotros.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#2C87CD]/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-[#2C87CD]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                <p className="text-gray-600">+123 456 7890</p>
                <p className="text-gray-600">Lun - Vie: 8:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#2C87CD]/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-[#2C87CD]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">info@purifasa.com</p>
                <p className="text-gray-600">ventas@purifasa.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#2C87CD]/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#2C87CD]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                <p className="text-gray-600">Calle Principal #123</p>
                <p className="text-gray-600">Ciudad, País</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2C87CD] text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h2>
              <p className="mb-6">
                Complete el formulario y un representante de ventas se pondrá en
                contacto con usted para proporcionarle una cotización
                personalizada según sus necesidades.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p>+123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@purifasa.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Dirección</h3>
                    <p>Calle Principal #123, Ciudad, País</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Su nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Su número de teléfono"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de su empresa"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Seleccione un asunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cotizacion">
                        Solicitud de Cotización
                      </SelectItem>
                      <SelectItem value="informacion">
                        Información de Productos
                      </SelectItem>
                      <SelectItem value="soporte">Soporte Técnico</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Detalle su consulta o requerimiento"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#2C87CD] hover:bg-[#1c6aa6]"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
