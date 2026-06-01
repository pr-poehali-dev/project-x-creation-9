import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Наследие
                <br />
                великого
                <br />
                <span className="text-foreground/40">учёного</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Лаборатория имени Ломоносова — первая в России научная площадка, созданная в честь гениального учёного, поэта и просветителя Михаила Васильевича Ломоносова.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Мы продолжаем его традиции: ведём исследования, популяризируем науку и открываем знания для нового поколения студентов.
              </p>
            </div>
          </div>

          {/* Right side - Stats with creative layout */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-12">
            {[
              { value: "1755", label: "Год основания", sublabel: "Традиции Ломоносова", direction: "right" },
              { value: "5", label: "Лабораторий", sublabel: "Исследовательских направлений", direction: "left" },
              { value: "300+", label: "Студентов", sublabel: "Проходят обучение ежегодно", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-foreground md:text-6xl lg:text-7xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-base font-light text-foreground md:text-xl">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Написать нам
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
            Читать статьи
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}