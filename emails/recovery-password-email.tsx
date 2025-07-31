import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Preview,
    Section,
    Tailwind,
    Text,
    pixelBasedPreset,
} from "@react-email/components";

interface RecoveryPasswordEmailProps {
    name?: string;
    recoveryLink?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

const RecoveryPasswordEmail = ({
    name,
    recoveryLink,
}: RecoveryPasswordEmailProps) => {
    const previewText = "MKDev - Recupere sua senha";

    return (
        <Html>
            <Head />
            <Tailwind config={{ presets: [pixelBasedPreset] }}>
                <Body className="mx-auto my-auto bg-white px-2 font-sans">
                    <Preview>{previewText}</Preview>
                    <Container className="p-[45px] border border-[#f0f0f0]">
                        <Img
                            src={`${baseUrl}/static/logo.svg`}
                            width={80}
                            height={36}
                            alt="MKDev"
                        />

                        <Section>
                            <Text className="text-base font-sans font-light text-gray-600">
                                Olá, {name}
                            </Text>

                            <Text className="text-base font-sans font-light text-gray-600">
                                Foi solicitado recentemente uma solicitação para
                                recuperação de senha. Caso tenha sido você, você
                                pode alterar a senha clicando no botão abaixo:
                            </Text>

                            <Button
                                className="inline-flex h-12 rounded-lg py-2 px-5 items-center justify-center gap-2 whitespace-nowrap ring-offset-background cursor-pointer bg-[#2670df] text-[#CCDAE7] font-semibold text-xl"
                                href={recoveryLink}
                            >
                                Recuperar a senha
                            </Button>

                            <Text className="text-base font-sans font-light text-gray-600">
                                Se você não quer mudar a sua senha ou não foi
                                você quem solicitou, apenas ignore e delete essa
                                mensagem.
                            </Text>

                            <Text className="text-base font-sans font-light text-gray-600">
                                Para manter a sua conta segura, não envie
                                encaminhe essa mensagem para ninguem.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

RecoveryPasswordEmail.PreviewProps = {
    name: "John Doe",
    recoveryLink: "http://localhost:3000/recoveryToken=ASLD234J",
} as RecoveryPasswordEmailProps;

export default RecoveryPasswordEmail;
