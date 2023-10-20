import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    QuestionMarkCircledIcon,
} from '@radix-ui/react-icons';
import {Label} from '@radix-ui/react-label';
import {
    Content,
    Group,
    Icon,
    Item,
    ItemIndicator,
    ItemText,
    Portal,
    Root,
    ScrollDownButton,
    ScrollUpButton,
    Trigger,
    Value,
    Viewport,
} from '@radix-ui/react-select';
import {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';

import Button from '../Button/Button';

export interface ISelectOption {
    label: string;
    value: string;
    description?: string;
}

type SelectProps = {
    options: ISelectOption[];
    contentClassName?: string;
    defaultValue?: string | undefined;
    description?: string;
    fieldsetClassName?: string;
    label?: string;
    leadingIcon?: ReactNode;
    onValueChange?(value: string): void;
    placeholder?: string;
    triggerClassName?: string;
    value?: string;
};

const Select = ({
    contentClassName,
    defaultValue,
    description,
    fieldsetClassName,
    label,
    leadingIcon,
    onValueChange,
    options,
    placeholder,
    triggerClassName,
    value,
}: SelectProps): JSX.Element => (
    <fieldset className={twMerge('w-full', fieldsetClassName)}>
        {label && (
            <Label
                className={twMerge(
                    'flex items-center text-sm font-medium leading-6 text-gray-900',
                    description && 'space-x-1'
                )}
            >
                <span>{label}</span>

                {description && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <QuestionMarkCircledIcon />
                            </TooltipTrigger>

                            <TooltipContent>{description}</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </Label>
        )}

        <Root
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            value={value}
        >
            <Trigger asChild aria-label="Select">
                <Button
                    className={twMerge(
                        leadingIcon && 'relative pl-10',
                        triggerClassName
                    )}
                    displayType="light"
                >
                    {leadingIcon && (
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border-r border-gray-300 bg-gray-100 px-2">
                            {leadingIcon}
                        </div>
                    )}

                    <Value placeholder={placeholder || 'Select...'} />

                    <Icon className="ml-auto pl-2">
                        <ChevronDownIcon />
                    </Icon>
                </Button>
            </Trigger>

            <Portal className="z-50">
                <Content
                    align="start"
                    className={twMerge(
                        'max-h-select-content-available-height min-w-select-trigger-width',
                        contentClassName
                    )}
                    position="popper"
                    sideOffset={5}
                >
                    <ScrollUpButton className="flex items-center justify-center text-gray-700">
                        <ChevronUpIcon />
                    </ScrollUpButton>

                    <Viewport className="rounded-lg border border-gray-100 bg-white p-2 shadow-lg">
                        <Group>
                            {options.map((option) => (
                                <Item
                                    key={option.value}
                                    value={option.value}
                                    className="radix-disabled:opacity-50 relative cursor-pointer select-none items-center overflow-hidden rounded-md px-8 py-2 text-sm font-medium text-gray-700 focus:bg-gray-100 focus:outline-none"
                                >
                                    <ItemIndicator className="absolute left-2 inline-flex items-center">
                                        <CheckIcon />
                                    </ItemIndicator>

                                    <div className="flex flex-col">
                                        <ItemText>{option.label}</ItemText>

                                        {option.description && (
                                            <span
                                                className="mt-1 line-clamp-2 w-full text-xs text-gray-500"
                                                title={option.description}
                                            >
                                                {option.description}
                                            </span>
                                        )}
                                    </div>
                                </Item>
                            ))}
                        </Group>
                    </Viewport>

                    <ScrollDownButton className="flex items-center justify-center text-gray-700">
                        <ChevronDownIcon />
                    </ScrollDownButton>
                </Content>
            </Portal>
        </Root>
    </fieldset>
);

export default Select;
